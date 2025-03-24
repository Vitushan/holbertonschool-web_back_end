export default function createEmployeesObject(departementName, employees) {
  return {
    [departementName]: employees,
  };
}
