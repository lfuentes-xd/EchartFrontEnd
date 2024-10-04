//Styles.
import '../Config/Styles/index';

//resources
import {ApartmentsUbication, SquarePriceApartments, NormalApartments} from '../Views/Apartments/index'


export const Apartments = () => {


    return (
        <>
            <ApartmentsUbication/>
            <SquarePriceApartments/>
            <NormalApartments/>
        </>
    )
}
