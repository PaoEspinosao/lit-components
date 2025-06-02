import { expect} from "@open-wc/testing";
import { Utils } from "./service/utils";
import { Pruebas } from "./service/pruebas";


describe("mi primera prueba", ()=>{
    it("mi Primera Prueba"), ()=>{
        expect(true).equal(true);
    }

    it('Test functions sum', ()=>{
        const utils_service = new Utils();

        const result: number = utils_service.sum(10, 5);
        expect(result).equal(15);


    })

    it('Test function Fizz-Buzz', ()=>{
        const prueba_service = new Pruebas();

        const result:string[] = prueba_service.fizzBuzz(4);
        expect(result).to.deep.equal(['1','2','Fizz','4']);


    })
})