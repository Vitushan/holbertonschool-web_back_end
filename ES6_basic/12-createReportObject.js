export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },

    getNumberOfDepartements(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
