import { parseResponse } from './parseResponse';
describe(':parseResponse', () => {
  describe(':given callback responses', () => {
    describe('nameCallback', () => {
      it('Should return the json', () => {
        const data = 'callback({"Message":"","Names":[{"Abn":"123123123","AbnStatus":"0000001"}]})';
        const Json = {
          Message:"",
          Names:[{Abn:"123123123",AbnStatus:"0000001"}]
        };

        const expectedReturn = JSON.stringify(Json);

        const result = parseResponse(data);
        expect(result).toEqual(expectedReturn);
      });
    });
  });
});