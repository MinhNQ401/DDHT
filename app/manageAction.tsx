export function ManageAction(tasks, action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        { id: action.id, name: action.name, price: action.price },
      ];
    }
    case "remove": {
      return tasks.filter((t) => t.id !== action.id);
    }
  }
}
