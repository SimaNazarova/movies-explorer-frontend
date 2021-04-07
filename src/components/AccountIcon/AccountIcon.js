import icon from "../../images/iconOfProfile.svg";

function AccountIcon() {
  return (
    <div className="icon__account-button">
      <span className="icon__account_text">Аккаунт</span>{" "}
      <div className="icon__account-icon-circle">
        <img className="icon__account-icon" alt="иконка" src={icon}></img>
      </div>
    </div>
  );
}

export default AccountIcon;
