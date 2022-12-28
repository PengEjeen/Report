/**
 * 디스크 가득참 이메일 알림
 */
function reportDiskerror(url) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.setActiveSheet(sheet.getSheetByName('Server'));
  report = fetchObject(url, "disk")
  if(report != 0) {
    MailApp.sendEmail({
       to: "namyoung.cho@kewtea.com",
        subject: url + " disk full",
        htmlBody: "디스크 용량을 확인해주세요. https://docs.google.com/spreadsheets/d/1HO4EVliTcsk_KimR8-3O8cO2JXKk8whVn5kGRDaNL_o/edit#gid=0"
    })
  }
}

/**
 * cpu사용량 높음 이메일 알림
 */
function reportCPUerror(url) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.setActiveSheet(sheet.getSheetByName('Server'));
  report = fetchObject(url, "cpu")
  if(report<=1 & report>=0.8){
    MailApp.sendEmail({
      to: "namyoung.cho@kewtea.com",
      subject: url + " cpu사용량 80%이상",
      htmlBody: "cpu사용량을 확인해주세요. https://docs.google.com/spreadsheets/d/1HO4EVliTcsk_KimR8-3O8cO2JXKk8whVn5kGRDaNL_o/edit#gid=0"
    })
  }
}

/**
 * 메모리 사용량 높음 이메일 알림
 */
function reportRAMerror(url) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.setActiveSheet(sheet.getSheetByName('Server'));
  report = fetchObject(url, "ram")
  if(report>=0.9){
    MailApp.sendEmail({
      to:"namyoung.cho@kewtea.com",
      subject: url + " ram사용량 90%이상",
      htmlBody: "ram사용량을 확인해주세요. https://docs.google.com/spreadsheets/d/1HO4EVliTcsk_KimR8-3O8cO2JXKk8whVn5kGRDaNL_o/edit#gid=0"
    })
  }
}
