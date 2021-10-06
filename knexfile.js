module.exports = {

    development: {
        client: 'oracledb',
        connection: {
            host: '155.223.130.37:1521',
            user: 'kkysusertest',
            password: 'kkysusertest',
            database: 'databasename',
            instanceName: 'eutfz.hbs.ege.edu.tr',
            requestTimeout: 100,
            connectString: `Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=155.223.130.37)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=eutfz.hbs.ege.edu.tr)));User ID=kkysusertest;Password=kkysusr!2020;`
            //expirationChecker?(): boolean;
        }
    }

}