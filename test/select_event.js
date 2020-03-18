/**
 * Selecting an Event Package
 * 
 * Functions:
 * viewAllPackages :- returns an array of JSON objects containing a package's name and cost
 * viewPackageDetails :- takes a package ID/name and returns the package name, cost, and details
 * confirmPackage :- takes a package ID, client-user object, and date range and stores in vCRM events database.
 *                           Calls functions saveEventToDatabase, emailEventDetails
 * saveEventToDatabase :- takes package ID, client-user object, and date range creates and saves event to vCRM events database. Returns event object
 * emailEventDetails :- takes event object, constructs and sends email to client
 * 
 */

describe("Selecting an Event Package:", () => {

    describe("View all Event Packages Function", () => {
        // beforeAll(() => {
        //     // Doing this for my own testing purposes to see if I can make the tests pass
        //     viewAllPackages = () => {
        //         return [{
        //             'name':'doesnt matter', 
        //             'cost': 50
        //         },
        //         {}]
        //     }
        // });

        // afterAll(() => {
        //     viewAllPackages = null;
        // });

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

        it("should be defined", () => {
            expect(viewPackageDetails).toBeDefined();
        });
        
        it("should accept a package name and return a JSON describing the package with properties 'name', 'cost', 'description'", () => {
            let package = viewPackageDetails('Deluxe Wedding Package');
            expect(package['name']).toEqual('Deluxe Wedding Package');
            expect(package['cost']).toBeInstanceOf(Number);
            expect(package['description']).toContain('Your dream wedding comes true when you leave all the planning to us');
        });

        it("should accept a package ID and return a JSON describing the package with properties 'name', 'cost', 'description'", () => {
            let package = viewPackageDetails('LC3');
            expect(package['name']).toEqual('Large Conference 300');
            expect(package['cost']).toBeInstanceOf(Number);
            expect(package['description']).toContain('When you need to host 100s of people in a comfortable and spacious environment, this is the package you choose');
        });

        it("should accept a package name and return null if a requested package does not exist", () => {
            expect(viewPackageDetails).toBeDefined();
            let package = viewPackageDetails('This IS A MADE UP PACKAGEE!! *Kicks person off ledge*');
            expect(package).toBeNull();
        });

        it("should accept a package ID and return null if a requested package does not exist", () => {
            expect(viewPackageDetails).toBeDefined();
            let package = viewPackageDetails('LOLXOXO');
            expect(package).toBeNull();
        });
    });

    describe("Confirm Package Function", () => {
        it("should exist", () => {
            expect(confirmPackage).toBeDefined();
        });

        it("should call saveEventToDatabase", () => {
            spyOn(saveEventToDatabase).and.returnValue({});
            confirmPackage('LC3', {name: "Man Made"}, "20201603", "20201803");
            expect(saveEventToDatabase).toHaveBeenCalled();
        });

        it("should call emailEventDetails", () => {
            spyOn(emailEventDetails).and.returnValue(true);
            confirmPackage('LC3', {name: "Man Made"}, "20201603", "20201803");
            expect(emailEventDetails).toHaveBeenCalled();
        });
    });
});