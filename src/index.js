const Session = require("./Session"),
    UserService = require("./services/UserService");

(async function () {
    const session = await Session("MGNhYjk3YmEtYmY4My00YjRhLWI1Y2YtMzRhNWIwZGZhNzUzOmI3ODkwNTliLTk0NmQtNDIwMS05MmZhLTM1YmJkODE2ZTUwOA==", "2.0");
    
    const transactions = await UserService.getTransactions("07a23aba-1a00-4508-9b91-993be92669a6", session);

    subclasses = transactions.getAllSubClassInfo();

    subclasses.forEach(function (subclass) {
        console.log(subclass.print());
    })

})();