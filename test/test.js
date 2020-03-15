

describe("Maintain information on packages and services",function(){

    

    


    describe("remove packages",function(){


        it("should no longer exist",function(){


            expect(RemovePackage()).toBe(true)

        })


        it("should be able to remove 10 packages and changes be reflected",function(){

            expect(remove10Times()).toHaveBeenCalledTimes(10)
            
        })


        it("changes reflected immediately after a change to the customer",function(){

            expect(viewPackages()).toBe(["wedding","banquet"]);
            
        })

       

    })




    


   

    
})


