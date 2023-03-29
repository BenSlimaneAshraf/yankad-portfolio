import Dropdown from "../../Dropdown";
import DropdownItem from "../../DropdownItem";
import { ReactComponent as ArrowIco } from "../../../assets/icons/arrow_1.svg";
import { ReactComponent as Arrow2Ico } from "../../../assets/icons/arrow_2.svg";
import { ReactComponent as FolderIco } from "../../../assets/icons/folder.svg";
import { ReactComponent as MarkdownIco } from "../../../assets/icons/markdown.svg";
import { ReactComponent as MailIco } from "../../../assets/icons/mail.svg";
import { ReactComponent as PhoneIco } from "../../../assets/icons/phone.svg";

const OPTIONS = {
  label: "professional-info",
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
  label: "companies",
  initial: true,
  icon: <FolderIco className='bg_3' />,
  ArrowIco: <Arrow2Ico />,
  className: "sc_dropdown__section borderless",
};

const ProfessionalMenu = () => {
  return (
    <div className='sc_menu__main'>
      <Dropdown options={OPTIONS}>
        <Dropdown options={OPTIONS3}>
          <DropdownItem
            label='taki-academy'
            icon={<MarkdownIco />}
            style={{ marginLeft: 24 }}
            link='/aboutme/professional/companies/taki-academy'
          />
          <DropdownItem
            label='ostedhy'
            icon={<MarkdownIco />}
            style={{ marginLeft: 24 }}
            link='/aboutme/professional/companies/ostedhy'
          />
          <DropdownItem
            label='softylines'
            icon={<MarkdownIco />}
            style={{ marginLeft: 24 }}
            link='/aboutme/professional/companies/softylines'
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

export default ProfessionalMenu;
