export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },

    getNumberOfDepartements() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
