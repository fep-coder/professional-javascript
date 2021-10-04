function sayHi() {
    return "Hello";
}

assert(
    typeof sayHi === "function" && typeof sayHello === "undefined",
    "Within the module we can access only sayHi"
);

export { sayHi as sayHello };