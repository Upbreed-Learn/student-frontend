import { Link, NavLink } from 'react-router';
import logo from '../assets/upbreed-logo-footer.svg';
import LinkedIn from '@/assets/jsx-icons/linkedin';
import Instagram from '@/assets/jsx-icons/instagram';
import Twitter from '@/assets/jsx-icons/twitter';
import Facebook from '@/assets/jsx-icons/facebook';
import Youtube from '@/assets/jsx-icons/youtube';
import z from 'zod';
import { useForm } from '@tanstack/react-form';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import LockIcon from '@/assets/jsx-icons/lock';
import { cn } from '@/lib/utils';

const LINKS = [
  {
    name: 'About Us',
    href: '#',
  },
  {
    name: 'Career',
    href: '#',
  },
  {
    name: 'Classes',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Press',
    href: '#',
  },
  {
    name: 'News',
    href: '#',
  },
  {
    name: 'Privacy Policy',
    href: '#',
  },
  {
    name: 'Terms',
    href: '#',
  },
  {
    name: 'FAQ',
    href: '#',
  },
  {
    name: 'Contact Us',
    href: '#',
  },
  {
    name: 'Gifts',
    href: '#',
  },
];

const formSchema = z.object({
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  terms: z.boolean().refine(val => val === true, {
    message: 'Please accept the terms and conditions.',
  }),
});

const Footer = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      terms: false,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col bg-[#00230F] pt-17 pb-10">
      <div className="flex w-full max-w-7xl items-end gap-36 self-center px-18 pb-7">
        <div className="flex items-end gap-22.75">
          <img src={logo} alt="upbreed logo" />
          <div className="flex gap-35 text-sm/9 text-white">
            <ul>
              {LINKS.slice(0, 6).map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(isActive && 'text-[#D0EA50]')
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul>
              {LINKS.slice(6).map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(isActive && 'text-[#D0EA50]')
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-12 self-end">
          <div className="flex items-center gap-7">
            <Link to={'/'}>
              <LinkedIn />
            </Link>
            <Link to={'/'}>
              <Instagram />
            </Link>
            <Link to={'/'}>
              <Twitter />
            </Link>
            <Link to={'/'}>
              <Facebook />
            </Link>
            <Link to={'/'}>
              <Youtube />
            </Link>
          </div>
          <form
            id="subscribe-form"
            onSubmit={e => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="flex w-full flex-col gap-6"
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={field => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid} className="w-max">
                      <FieldLabel
                        htmlFor={field.name}
                        className="w-max text-sm/[100%] font-semibold text-white"
                      >
                        Get the latest coolest new from UPBREED
                      </FieldLabel>
                      <FieldSet className="flex-row gap-0">
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={e => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          type="email"
                          placeholder="Email"
                          className="h-12 w-75.5 rounded-none rounded-l-lg border-[#9B9B9B] bg-[#47474700] text-white placeholder:text-[#9B9B9B]"
                        />
                        <Button className="h-12 w-[9.88875rem] rounded-none rounded-r-lg">
                          Subscribe
                        </Button>
                      </FieldSet>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <form.Field
                name="terms"
                children={field => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid} className="w-full">
                      <FieldSet className="w-full flex-row gap-4">
                        <Checkbox
                          id={field.name}
                          checked={field.state.value}
                          name={field.name}
                          onBlur={field.handleBlur}
                          onCheckedChange={e =>
                            field.handleChange(e === true ? true : false)
                          }
                        />
                        <FieldLabel
                          htmlFor={field.name}
                          className="w-full text-sm/[100%] font-semibold text-nowrap text-white"
                        >
                          <span className="text-[#FF0000]">*</span> By clicking
                          here, I agree to share my information
                        </FieldLabel>
                      </FieldSet>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </div>
      </div>
      <div className="flex justify-center border-t-2 border-[#305B43] pt-3">
        <div className="flex w-full max-w-7xl items-center gap-16 px-18 text-sm/[100%] font-semibold text-white">
          <p>(c) {year} upbreed </p>
          <div className="flex items-center gap-2">
            <LockIcon />
            <span className="text-xs/[100%]">Secured with SSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
