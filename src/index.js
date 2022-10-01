import HelloWorld from "./HelloWorld.vue";

export function install(app) {
    app.component(HelloWorld.name, HelloWorld);
}

export default { install }