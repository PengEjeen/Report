/**
 * 문서를 열 때 자동실행됩니다.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Reports')
    .addItem('서버 보고', reportDevinf.name)
    .addItem('자동보고 켜기', enableAutoreport.name)
    .addItem('자동보고 끄기', disableAutoreport.name)
    .addToUi();
}


/**
 * 기기 정보를 추가합니다.
 * 실패시 이메일을 발송합니다.
 */
function reportDevinf() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.setActiveSheet(sheet.getSheetByName('Server'));
  var urls = ["http://34.125.179.111/reports","http://34.64.194.62:8080/reports"];
  for(var url of urls){
    var reportDate = formatDate(new Date());
    try {
      reportDiskerror(url);
      reportCPUerror(url);
      reportRAMerror(url);
      sheet.appendRow([
        fetchObject(url, "ip"),
        fetchObject(url, "cpu"),
        fetchObject(url, "ram"),
        fetchObject(url, "disk"),
        reportDate,
        null
      ]);
    } 
    catch(e) {
      sheet.appendRow([
        null,
        null,
        null,
        null,
        reportDate,
        e
      ]);
      MailApp.sendEmail({
        to: "namyoung.cho@kewtea.com",
        subject: url + " server down",
        htmlBody: "서버로부터 응답이 없습니다. https://docs.google.com/spreadsheets/d/1HO4EVliTcsk_KimR8-3O8cO2JXKk8whVn5kGRDaNL_o/edit#gid=0"
      });
    }
  }    
}


/**
 * 제이슨 객체를 얻습니다.
 */
function fetchObject(url,xpath){
  var response = UrlFetchApp.fetch(url);
  var content = response.getContentText();
  var json = JSON.parse(content);
  
  return json[xpath];
}

/**
 * timestamp 날짜를 문자열로 변환합니다.
 */
function formatDate(date) {
    return Utilities.formatDate(date, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
}

