export const DeleteAccount = () => {
    return (
        <>
        <div className="container bg-white shadow rounded my-4">
            <div className="heading my-4 ml-8">
                <h5 className="text-xl font-bold">Delete Account</h5>
            </div>
            <div className="info md:flex justify-between items-center mb-6 ml-8 mr-8">
                <p className="text-sm text-gray-500 mb-4 md:mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                <button className="bg-red-600 text-white p-2 rounded shadow hover:text-red-600 hover:bg-white">Delete Account</button>
            </div>
        </div>
        </>
    )
}