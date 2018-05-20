
import React, { type Node } from "react";
import createReactContext, { type Context } from "create-react-context";

type Theme = "light" | "dark";
type Actions = {
    toggleTheme: (string) => string
};

export const ThemeContext: Context<Theme> = createReactContext(); // Official API would read: React.createContext("light");

export class ThemeController extends React.Component<
    { render: (a: Actions) => Node },
    { theme: Theme }
    > {
    state = { activeTab: "1" };

    toggle = (tab) =>
    {
       if (this.state.activeTab !== tab) {
       this.setState({
             activeTab: tab
       });

       console.log("Tab" + tab);
       console.log("ActiveTab " + this.state.activeTab);
    }};

    toggleTheme = () =>
        this.setState(state => ({
            ...state,
            theme: state.theme === "light" ? "dark" : "light"
        }));

    render() {
        const { children, render = children } = this.props;
        return (
            <ThemeContext.Provider value={this.state.theme}>
                {render({ toggleTheme: this.toggleTheme })}
            </ThemeContext.Provider>
        );
    }
}
