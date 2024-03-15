interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Directors implements DirecorInterface {
  constructor(){}

  workFromHome(): string {
    return "Working from home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
class Teacher implements TeacherInterface {
  constructor(){}
	workFromHome(): string {
	  return "Cannot work from home";
	}
	getToWork(): string {
	  return "Getting a coffee break";
	}
	workTeacherTasks(): string {
	  return "Getting to work";
	}

}

const createEmployee = function (salary: number | string | Teacher {
	if (typeof salary === "number" && salary < 500) {
	  return new Teacher();
	}

	return new Director();
};

const isDirector = function (employee: Teacher | Director): employee is DirectorInterface {
	return 'gettingDirectorTasks' in employee;
};

const executeWork = function (employee: Teacher | Director) {
	if (isDirector(employee)) {
	  employee.workDirectorTasks();
	} else {
		employee.workTeacherTasks();
	}
};

type Subjects: 'Math' | 'History';
const teachClass = function (todayClass: Subjects): string {
	if (todayClass === 'Math') {
	  return 'Teaching Math';
	} else {
	  return 'Teaching History';
	}
};
