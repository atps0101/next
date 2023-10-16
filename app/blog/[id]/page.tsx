
type Props = {
    params : {
        id: string;
    };
};

export default function post({params: {id}} : Props){
    return <h1>POST PAGE {id}</h1>
}