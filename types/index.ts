export interface Blog {
    title : String , 
    description? : String ,
    id : String ,
    tags : String[],
    releaseDate : String,
    component? : React.ReactElement
}