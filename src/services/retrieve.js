export async function retrieveAllImages() {

    try{
        const response = await fetch('http://admin:supersecret@localhost:4000/momos/retrieve');
        const result =  await response.json();
        console.log(`result${result}`);
        return "ss";
    }catch(error) {
        return [];
    }
    
}