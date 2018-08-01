import * as wasp from "@wasp/core";
import * as models from "../../models";

export class TestController extends wasp.http.Controller {
    @wasp.http.endpoint({
        url: "/test/foo"
    })
    async foo() {
        await models.Person.save(models.Person.create({
            firstName: new Date().toLocaleDateString(),
            lastName: new Date().toLocaleTimeString()
        }));
        return {
            success: true,
            people: await models.Person.find()
        };
    }
}
