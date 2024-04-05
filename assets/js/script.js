let moduloRandom = (() => {
    const getUsers = async () => {
        const url = "https://randomuser.me/api/?results=10";
        try {
            const response = await fetch(url);
            const { results } = await response.json();

            let divUserData = document.getElementById("user-data");

            results.forEach((item) => {
                divUserData.innerHTML += `
                    <div style="display: inline-block;">
                        <p><img src='${item.picture.large}'><br>${item.name.first} ${item.name.last}<br><span style="font-size: 10px;">${item.email}</span><br><span style="font-size: 13px;">${item.phone}</span></p>
                        <br>
                    </div>
                `
            })
        } catch (error) {
            return error;
        }
    }
    return {
        publicGetUsers: () => {
            return getUsers();
        }
    }
})();

moduloRandom.publicGetUsers();