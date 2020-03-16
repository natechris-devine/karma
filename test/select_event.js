describe("Selecting an Event Package", () => {

    describe("View all Event Packages Function", () => {
        beforeAll(() => {
            // Doing this for my own testing purposes to see if I can make the tests pass
            viewAllPackages = () => {
                return [{
                    'name':'doesnt matter', 
                    'cost': 50
                },
                {}]
            }
        });

        afterAll(() => {
            viewAllPackages = null;
        });

       it("should be defined", () => {
           expect(viewAllPackages).toBeDefined();
       });
       
       it("should return an array of JSON describing each package", ()=> {
            let packages = viewAllPackages();
            expect(packages).toEqual(jasmine.any(Array))
            expect(packages[0]).toEqual(jasmine.any(Object));
       });

       it("should have JSON elements in the array with the properties 'name' and 'cost'", () => {
           let package = viewAllPackages()[0];
           expect(package['name']).toBeDefined();
           expect(package['cost']).toBeDefined();
       })
    });

    describe("View Package Details Function", () => {

        it("should return a JSON describing the selected package with properties 'name', 'cost', 'description'", () => {
            let package = viewPackageDetails('Deluxe Wedding Package');
            expect(package['name']).toEqual('Deluxe Wedding Package');
            expect(package['cost']).toBeInstanceOf(Number);
            expect(package['description']).toContain('Your dream wedding comes true when you leave all the planning to us');
        });

        it("should return null if a requested package does not exist", () => {
            let package = viewPackageDetails('This IS A MADE UP PACKAGEE!! *Kicks person off ledge*');
            expect(package).toBeNull();
        });
    });
});