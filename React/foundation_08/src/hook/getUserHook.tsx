import * as react from 'react';


export interface RandomUserResponse {
    statusCode: number;
    data: {
        gender: string;
        name: {
            title: string;
            first: string;
            last: string;
        };
        location: {
            street: {
                number: number;
                name: string;
            };
            city: string;
            state: string;
            country: string;
            postcode: number;
            coordinates: {
                latitude: string;
                longitude: string;
            };
            timezone: {
                offset: string;
                description: string;
            };
        };
        email: string;
        login: {
            uuid: string;
            username: string;
            password: string;
            salt: string;
            md5: string;
            sha1: string;
            sha256: string;
        };
        dob: {
            date: string;
            age: number;
        };
        registered: {
            date: string;
            age: number;
        };
        phone: string;
        cell: string;
        id: number;
        picture: {
            large: string;
            medium: string;
            thumbnail: string;
        };
        nat: string;
    };
    message: string;
    success: boolean;
}

export function useRandomUser(){
    const [user,setUser]=react.useState<null | RandomUserResponse['data'] >();


    async function getRandomUser(){
        const rowResponse= await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random",{method :"GET",headers: {'Content-Type':'application/json'}})
        const ogData= await rowResponse.json() as RandomUserResponse
        if(ogData.data && ogData.success){
            setUser(ogData.data)
        }  
    }

    return {
        user,getRandomUser
    };

}
