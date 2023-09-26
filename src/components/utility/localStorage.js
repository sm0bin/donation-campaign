const getMyDonations = () => {
    const myDonations = localStorage.getItem("myDonations");
    if (myDonations) {
        return JSON.parse(myDonations);
    }
    return [];
}

const setMyDonations = (id) => {
    const myDonations = getMyDonations();
    const idExists = myDonations.find(donationId => donationId === id);
    if (!idExists) {
        myDonations.push(id);
        localStorage.setItem("myDonations", JSON.stringify(myDonations));
    }
}

const calculatePrice = (DonationObject) => {
    const sumOfPrice = DonationObject.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return sumOfPrice;
}


export { getMyDonations, setMyDonations, calculatePrice };
