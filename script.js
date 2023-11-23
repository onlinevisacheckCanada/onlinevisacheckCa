// Sample user data (replace this with your actual data)
const users = [
    { id: '0069349650' , passportno:'EK0248058', name: 'MOHAMMAD RASEL', batch: '0005093249' , email: 'mdraselkhanr436@gmail.com',presentaddress: 'soudi arab', visatype: 'Work Permit', post: 'Official', companyname: 'Manitoba LTD' , companyaddress: 'Saint John-Canada', sex: 'Male', immigrationofficer: 'Approved Your Work Permit Visa Canada Immigration Office',  dateofbirth: '1993/08/28', countryofteritory: 'Bangladesh', },
    { id: '002', name: 'Jane Doe', batch: 30, email: '.com' },
    // Add more users as needed
];

function searchUser() {
    const userId = document.getElementById('userId').value;
    const userInfoContainer = document.getElementById('userInfo');

    // Find user by ID
    const user = users.find(u => u.id === userId);

    if (user) {
        // Display user information
        userInfoContainer.innerHTML = `
            <h2>User Information</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Passport No:</strong> ${user.passportno}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Batch:</strong> ${user.batch}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Visa Type:</strong> ${user.visatype}</p>
            <p><strong>Post:</strong> ${user.post}</p>
            <p><strong>Company Name:</strong> ${user.companyname}</p>
            <p><strong>Company Address:</strong> ${user.companyaddress}</p>
            <p><strong>Present Address:</strong> ${user.presentaddress}</p>
            <p><strong>Sex:</strong> ${user.sex}</p>
            <p><strong>Immigration Officer:</strong> ${user.immigrationofficer}</p>
            <p><strong>Date Of Birth:</strong> ${user.dateofbirth}</p>
            <p><strong>Country Of Teritory:</strong> ${user.countryofteritory}</p>
            <h2><p>Your working visa has been approved directly from Canada Immigration Office, the official online visa checking site of Canada Immigration Office. Download your visa form by clicking the download button below.Thank you</p><h2/>
            </div>
    <a Download class="btn btn2">Download Your VISA</a>
</div>
        `;
    } else {
        userInfoContainer.innerHTML = '<p>User not found.</p>';
    }
}
