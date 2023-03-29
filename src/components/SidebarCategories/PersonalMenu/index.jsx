import Dropdown from "../../Dropdown";
import DropdownItem from "../../DropdownItem";
import { ReactComponent as ArrowIco } from "../../../assets/icons/arrow_1.svg";
import { ReactComponent as Arrow2Ico } from "../../../assets/icons/arrow_2.svg";
import { ReactComponent as FolderIco } from "../../../assets/icons/folder.svg";
import { ReactComponent as MarkdownIco } from "../../../assets/icons/markdown.svg";
import { ReactComponent as MailIco } from "../../../assets/icons/mail.svg";
import { ReactComponent as PhoneIco } from "../../../assets/icons/phone.svg";

const OPTIONS = {
  label: "personal-info",
  initial: true,
  icon: null,
  ArrowIco: <ArrowIco />,
  className: "sc_dropdown__section",
};

const OPTIONS2 = {
  label: "contacts",
  initial: true,
  icon: null,
  ArrowIco: <ArrowIco />,
  className: "sc_dropdown__section",
};

const OPTIONS3 = {
  label: "education",
  initial: true,
  icon: <FolderIco className='bg_2' />,
  ArrowIco: <Arrow2Ico />,
  className: "sc_dropdown__section borderless",
};

const PersonalMenu = () => {
  return (
    <div className='sc_menu__main'>
      <Dropdown options={OPTIONS}>
        <DropdownItem
          label='bio'
          icon={<MarkdownIco className='bg_1' />}
          style={{ marginLeft: 24 }}
          link='/aboutme/personal/biography'
        />
        <Dropdown options={OPTIONS3}>
          <DropdownItem
            label='high-school'
            icon={<MarkdownIco />}
            style={{ marginLeft: 24 }}
            link='/aboutme/personal/education/high-school'
          />
          <DropdownItem
            label='university'
            icon={<MarkdownIco />}
            style={{ marginLeft: 24 }}
            link='/aboutme/personal/education/university'
          />
        </Dropdown>
      </Dropdown>
      <Dropdown options={OPTIONS2}>
        <DropdownItem label='user@gmail.com' icon={<MailIco />} />
        <DropdownItem label='+21622013878' icon={<PhoneIco />} />
      </Dropdown>
    </div>
  );
};

export default PersonalMenu;
