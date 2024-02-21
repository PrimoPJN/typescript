"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.MaxBooksAllowed = exports.CalculateLateFee = void 0;
function CalculateLateFee(daysLate) {
    return daysLate * 0.25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
// function privateFunc (): void {
//   console.log('This is private...')
// }
function Purge(inventory) {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
//# sourceMappingURL=utilityFunctions.js.map