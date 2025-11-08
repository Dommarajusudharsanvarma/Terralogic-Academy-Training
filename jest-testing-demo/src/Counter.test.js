import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";


test("render counter with initial value 0", () =>{
    render(<Counter/>);
    const countText = screen.getByTestId("count-value");
    expect(countText).toHaveTextContent("Count: 0");
});


test("increment count when increment button is clicked", () => {
    render(<Counter />);
    const button = screen.getByTestId("increment-btn");
    fireEvent.click(button);
    const countText = screen.getByTestId("count-value");
    expect(countText).toHaveTextContent("Count: 1");

});

test("decrement count when decrement button is clicked", () => {
    render(<Counter />);
    const button = screen.getByTestId("decrement-btn");
    fireEvent.click(button);
    const countText = screen.getByTestId("count-value");
    expect(countText).toHaveTextContent("Count: -1");
});