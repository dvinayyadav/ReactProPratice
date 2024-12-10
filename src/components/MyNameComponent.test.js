import MyNameComponent from "./MyNameComponent";
import {render,screen} from "@testing-library/react"

describe("MyName Component",()=>{

test('render MyNameComponent', () => {
    render(<MyNameComponent/>);
    let createElement=screen.getByText("My Name is D.Vinay");
    expect(createElement).toBeInTheDocument();
});

test('render MyNameComponent with props name', () => {
    render(<MyNameComponent name="D.Vinay" post="Fullstack Developer"/>);
    let createElement=screen.getByText("My Name is :D.Vinay");
    expect(createElement).toBeInTheDocument();
});

test('render MyNameComponent with props post', () => {
    render(<MyNameComponent name="D.Vinay" post="Fullstack Developer"/>);
    let createElement=screen.getByText("I am :Fullstack Developer");
    expect(createElement).toBeInTheDocument();
});

})