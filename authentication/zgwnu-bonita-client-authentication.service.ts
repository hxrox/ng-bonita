// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSessionInterface } from '../rest-api/zgwnu-bonita-session.interface'
import { ZgwnuBonitaSession } from '../rest-api/zgwnu-bonita-session'
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaCredentials } from './zgwnu-bonita-credentials'

// Internal Used
export interface GetSessionInterface {
    
}

@Injectable()
export class ZgwnuBonitaClientAuthenticationService {
    private readonly LOGIN_SERVICE_PATH = '/loginservice'
    private readonly SESSION_RESOURCE_PATH = '/system/session/unusedid'

    constructor(
        private httpClient: HttpClient, 
        private configService: ZgwnuBonitaConfigService,  
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
    }

    login(creds: ZgwnuBonitaCredentials): Observable<ZgwnuBonitaResponse> {
        let loginUrl: string = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH
        let loginBody: string = 
            'username=' + creds.username + '&password=' + creds.password + '&redirect=false'
        let loginHeaders: HttpHeaders = 
            new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

        return this.httpClient.post(
            loginUrl, 
            loginBody,
            { 
                headers: loginHeaders,
                observe: 'response',
                responseType: 'json'
            }
        )
        .map(response => this.mapLoginResponse(response))
        .catch(this.responseMapService.catchBonitaError)
    }

    private mapLoginResponse(response: HttpResponse<Object>): ZgwnuBonitaResponse {
        let bonitaResponse: ZgwnuBonitaResponse = new ZgwnuBonitaResponse()
        bonitaResponse.status = response.status
        bonitaResponse.statusText = response.statusText
        return bonitaResponse
    }

    getSession(): Observable<ZgwnuBonitaSession> {
        return this.httpClient.get<ZgwnuBonitaSessionInterface>(
            this.configService.bonitaUrls.apiUrl + this.SESSION_RESOURCE_PATH,
            { observe: 'response' }
        )
        .map(response => this.mapBonitaSession(response, this.configService))
        .catch(this.responseMapService.catchBonitaError)
    }

    private mapBonitaSession(response: HttpResponse<ZgwnuBonitaSessionInterface>, configService: ZgwnuBonitaConfigService): ZgwnuBonitaSession {
        let session: ZgwnuBonitaSession = new ZgwnuBonitaSession()
        // get session data from response Body
        session = response.body
        // get Bonita CRSF Security Token from response Headers
        session.token = response.headers.get(configService.bonitaSessionTokenKey)
        // save Bonita Session Data as Config
        this.configService.session = session
        return session
    }

}
