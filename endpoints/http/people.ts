import * as wasp from "@wasp/core";
import * as models from "../../models";

export class PeopleController extends wasp.http.Controller {
    @wasp.http.endpoint({
        method: "POST",
        url: "/people/createRandom"
    })
    async createRandom() {
        return {
            person: await models.Person.save(models.Person.create({
                firstName: new Date().toLocaleDateString(),
                lastName: new Date().toLocaleTimeString()
            }))
        };
    }

    @wasp.http.endpoint({
        url: "/people/all"
    })
    async getAll() {
        return {
            people: await models.Person.find()
        };
    }
}
