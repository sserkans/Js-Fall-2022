const Students = require("./Students");


const c1 = new Students(22, 'QA', 'Serkan', 'serkan@gmail.com', 'NY' );

c1.getProfile()
c1.changeName('Alex', 'S101')
c1.getProfile()
