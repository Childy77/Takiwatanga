import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("John mark Doe Kyzer");
  const [position, setPosition] = useState("Coach");
  const [experience, setExperience] = useState("10 Years");
  const [email, setEmail] = useState("edith@mail.com");
  const [website, setWebsite] = useState("www.example.com");
  const [phone, setPhone] = useState("507-541-4567");
  const [about, setAbout] = useState(
    "Edith is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  );
  const [profilePicture, setProfilePicture] = useState(
    "https://bootdey.com/img/Content/avatar/avatar7.png"
  );

  const handleNameChange = (event) => setName(event.target.value);
  const handlePositionChange = (event) => setPosition(event.target.value);
  const handleExperienceChange = (event) => setExperience(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleWebsiteChange = (event) => setWebsite(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleAboutChange = (event) => setAbout(event.target.value);
  const handleProfilePictureChange = (event) => setProfilePicture(URL.createObjectURL(event.target.files[0]));

  return (
    <section className="bg-light background1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4 mb-sm-5 row1">
            <div className="card card-style1 border-0 container3">
              <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src={profilePicture} alt="Profile" />
                    <input type="file" onChange={handleProfilePictureChange} />
                  </div>
                  <div className="col-lg-6 px-xl-10">
                    <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="h2 text-white mb-0"
                      />
                      <input
                        type="text"
                        value={position}
                        onChange={handlePositionChange}
                        className="text-primary"
                      />
                    </div>
                    <ul className="list-unstyled mb-1-9">
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">
                          Position:
                        </span>
                        <input
                          type="text"
                          value={position}
                          onChange={handlePositionChange}
                          className="form-control form-control-lg"
                        />
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">
                          Experience:
                        </span>
                        <input
                          type="text"
                          value={experience}
                          onChange={handleExperienceChange}
                          className="form-control form-control-lg"
                        />
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">
                          Email:
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          className="form-control form-control-lg"
                        />
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">
                          Website:
                        </span>
                        <input
                          type="url"
                          value={website}
                          onChange={handleWebsiteChange}
                          className="form-control form-control-lg"
                        />
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">
                          Phone:
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          className="form-control form-control-lg"
                        />
                      </li>
                    </ul>
                    <div className="mb-1-9">
                      <h2 className="h5 mb-1-9">About Me</h2>
                      <textarea
                        value={about}
                        onChange={handleAboutChange}
                        rows="6"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profile;

