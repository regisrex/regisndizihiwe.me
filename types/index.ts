export interface Blog {
    title : String , 
    description? : String ,
    id : String ,
    tags : String[],
    component? : React.ReactElement
}