export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const dep in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(dep)) {
      allEmployees.push(...report.allEmployees[dep]);
    }
  }
  return allEmployees;
}
