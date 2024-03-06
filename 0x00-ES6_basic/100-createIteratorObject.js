export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const dep in report.allEmployees) {
    if (dep) {
      allEmployees.push(...report.allEmployees[dep]);
    }
  }
  return allEmployees;
}
