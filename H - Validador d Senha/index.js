var input = "URI Online Judge\nAbcdEfgh99\nURIOnlineJudge12\nURI Online Judge 12\nAass9\nAassd9"
var lines = input.split('\n');

var validateInput = lines.filter(function (currentValue) {
    var lengthPass = (currentValue.length >= 6)
    var charsPass = !(currentValue.search(/[ "´`~ãÃçÇáÁéÉíÍóÓúúàÀêÊ!#.,:?]/g, '') > -1);
    var upperCasePass = (currentValue.search(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '') > -1)
    var lowerCasePass = (currentValue.search(/[abcdefghijklmnoprstuvwxyz]/g, '') > -1)
    var leastNumberPass = (currentValue.search(/[1234567890]/g, '') > -1)
    var validate = (lengthPass && charsPass && upperCasePass && lowerCasePass && leastNumberPass);
    console.log(validate ? "Senha válida." : "Senha inválida.")
})