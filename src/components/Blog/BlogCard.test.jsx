import { render as rtlRender, screen } from "@testing-library/react";
import { BlogCard } from "..";
import { expect, test } from "vitest";
import { Provider } from "react-redux";
import { store } from "src/Services/store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={component} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

test("it display the blog image", () => {
  render(<BlogCard />);
  //Todo: creare fetch per fare un finto blog post
  const blogImage = screen.getByTestId("blogImage");
  expect(blogImage).toBeInTheDocument();
});
