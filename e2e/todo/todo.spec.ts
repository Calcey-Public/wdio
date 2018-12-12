import { expect } from 'chai';
import { ToDoPage } from './todo.page';

describe('todo page', () => {
    let n = 0;
    let todoPage: ToDoPage;

    afterEach((done) => {
        const filename = './e2e/screenshots/Todo_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        todoPage = new ToDoPage();
        todoPage.navigate();
    });

    it('Shoud add todo', () => {
        let todoListLength = todoPage.todoListLength;
        todoPage.addToDo("New Todo");
        const newTodoListLength = todoPage.todoListLength;

        expect(newTodoListLength).to.be.equal(todoListLength + 1);
    });

    it("Should remove completed", () => {
        let todoListLength = todoPage.todoListLength;
        todoPage.addToDo("New Todo 2");
        const newTodoListLength = todoPage.todoListLength;

        expect(newTodoListLength).to.be.equal(todoListLength + 1);

        let completedPage = todoPage.navigateToCompleted();
        const currentCompletedTodos =  completedPage.todoListLength;

        todoPage = completedPage.navigateToToDoList();
        todoPage.completeLastTodo();

        completedPage = todoPage.navigateToCompleted();
        const newCompletedTodos = completedPage.todoListLength;

        expect(newCompletedTodos).to.be.equal(currentCompletedTodos + 1); 
    })
});