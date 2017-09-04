"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_utils_1 = require("../../rest-api/zgwnu-bonita-utils");
var ZgwnuBonitaDocument = /** @class */ (function () {
    function ZgwnuBonitaDocument(documentData) {
        var utils = new zgwnu_bonita_utils_1.ZgwnuBonitaUtils();
        this.id = documentData.id;
        this.creationDate = utils.getDateValue(documentData.creationDate);
        this.author = documentData.author;
        this.index = documentData.index;
        this.contentMimetype = documentData.contentMimetype;
        this.caseId = documentData.caseId;
        this.contentStorageId = documentData.contentStorageId;
        this.isInternal = documentData.isInternal;
        this.description = documentData.description;
        this.name = documentData.name;
        this.fileName = documentData.fileName;
        this.submittedBy = documentData.submittedBy;
        this.url = documentData.url;
        this.version = documentData.version;
    }
    return ZgwnuBonitaDocument;
}());
exports.ZgwnuBonitaDocument = ZgwnuBonitaDocument;
//# sourceMappingURL=zgwnu-bonita-document.js.map