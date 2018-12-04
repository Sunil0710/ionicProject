export interface Item{
    key?: string;
    title: string;
    label: string;
    listedItems : any [];
    strikedItems : any [];
    // listedItems : [
    //     {
    //         title: string,
    //         checkItem: boolean
    //     }
    // ];
    // strikedItems : [
    //     {
    //         title: string,
    //         checkItem: boolean
    //     }
    // ];
}