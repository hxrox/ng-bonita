import { NgModule } from '@angular/core'

/*
import { ZgwnuBonitaAuthenticationService } from './authentication'
import { ZgwnuBonitaBpmProcessService } from './bpm/process'
import { ZgwnuBonitaBpmCaseService } from './bpm/case'
import { ZgwnuBonitaBpmCaseDocumentService } from './bpm/document' 
import { ZgwnuBonitaBpmDataService } from './bpm/data'
import { ZgwnuBonitaBpmActivityService } from './bpm/activity'
import { ZgwnuBonitaBpmTaskService } from './bpm/task'
import { ZgwnuBonitaBpmHumanTaskService } from './bpm/human-task'
import { ZgwnuBonitaBpmUserTaskService } from './bpm/user-task'
import { ZgwnuBonitaBusinessDataService } from './bdm'
import { ZgwnuBonitaFileUploadService } from './file-upload'
*/
import { ZgwnuBonitaConfigService } from './rest-api' 

@NgModule({
    providers: [
        ZgwnuBonitaConfigService,
        /*
        ZgwnuBonitaAuthenticationService,
        ZgwnuBonitaBpmProcessService,
        ZgwnuBonitaBpmCaseService, 
        ZgwnuBonitaBpmCaseDocumentService, 
        ZgwnuBonitaBpmDataService, 
        ZgwnuBonitaBpmActivityService, 
        ZgwnuBonitaBpmTaskService, 
        ZgwnuBonitaBpmHumanTaskService, 
        ZgwnuBonitaBpmUserTaskService, 
        ZgwnuBonitaBusinessDataService, 
        ZgwnuBonitaFileUploadService, 
        */
    ]
})
export class ZgwnuBonitaModule {}