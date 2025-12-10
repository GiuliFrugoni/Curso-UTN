    const moment= require('moment');
    moment.locale('es');
    console.log('Naci ' + moment("20001020", "YYYYMMDD").fromNow());