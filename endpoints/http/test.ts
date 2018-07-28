import * as wasp from "@wasp/core";

export class TestController extends wasp.http.Context {
    @wasp.http.endpoint({
        url: "/test/foo"
    })
    async foo() {
        console.log(this.req.path);
    }
}
