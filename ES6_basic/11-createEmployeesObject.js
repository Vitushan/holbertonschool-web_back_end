export default function creatEmployeesObject(departementName, employees) {
  return {
    [departementName]: employees,
  };
}
