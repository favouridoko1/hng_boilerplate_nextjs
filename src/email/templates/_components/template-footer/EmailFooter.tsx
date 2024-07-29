import { Container, Link } from "@react-email/components";

const EmailFooter: React.FC = () => {
  return (
    <section className="mx-[48px] mx-auto flex max-w-[792px] items-center justify-center bg-[#E1D6D666] py-[32px] text-left font-sans text-sm text-gray-600 md:px-0">
      <Container className="max-w-[680px]">
        <div>
          <section className="mb-6 mt-2 flex flex-wrap justify-center gap-8 text-center">
            <Link
              href="https://deployment.nextjs.boilerplate.hng.tech/"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M18.3263 1.90393H21.6998L14.3297 10.3274L23 21.7899H16.2112L10.894 14.838L4.80995 21.7899H1.43443L9.31743 12.78L1 1.90393H7.96111L12.7674 8.25826L18.3263 1.90393ZM17.1423 19.7707H19.0116L6.94539 3.81706H4.93946L17.1423 19.7707Z"
                  fill="#5B5B5D"
                />
              </svg>
            </Link>

            <Link
              href="https://deployment.nextjs.boilerplate.hng.tech/"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <g clipPath="url(#clip0_10908_7020)">
                  <path
                    d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                    fill="#5B5B5D"
                  />
                  <path
                    d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                    fill="#5B5B5D"
                  />
                  <path
                    d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                    fill="#5B5B5D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10908_7020">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            <Link
              href="https://deployment.nextjs.boilerplate.hng.tech/"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z"
                  fill="#5B5B5D"
                />
              </svg>
            </Link>

            <Link
              href="https://deployment.nextjs.boilerplate.hng.tech/"
              aria-label="Reddit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14.4412 5.65873C14.6493 6.54092 15.4415 7.19811 16.3874 7.19811C17.4918 7.19811 18.3871 6.30279 18.3871 5.19842C18.3871 4.09404 17.4918 3.19873 16.3874 3.19873C15.4218 3.19873 14.6165 3.88311 14.429 4.79342C12.8118 4.96686 11.549 6.33842 11.549 8.00061C11.549 8.00436 11.549 8.00717 11.549 8.01092C9.79023 8.08498 8.18429 8.58561 6.90929 9.37592C6.43585 9.00936 5.84147 8.79092 5.19647 8.79092C3.64866 8.79092 2.39429 10.0453 2.39429 11.5931C2.39429 12.7162 3.05429 13.6837 4.00772 14.1309C4.10054 17.384 7.64523 20.0006 12.0055 20.0006C16.3659 20.0006 19.9152 17.3812 20.0033 14.1253C20.9493 13.6753 21.6037 12.7106 21.6037 11.594C21.6037 10.0462 20.3493 8.79186 18.8015 8.79186C18.1593 8.79186 17.5677 9.00842 17.0952 9.37217C15.809 8.57623 14.1852 8.07561 12.4087 8.00904C12.4087 8.00623 12.4087 8.00436 12.4087 8.00154C12.4087 6.81092 13.2937 5.82279 14.4412 5.66061V5.65873ZM6.79679 13.3715C6.84366 12.3553 7.51866 11.5753 8.30335 11.5753C9.08804 11.5753 9.68804 12.3994 9.64116 13.4156C9.59429 14.4319 9.00835 14.8012 8.22272 14.8012C7.4371 14.8012 6.74991 14.3878 6.79679 13.3715ZM15.7087 11.5753C16.4943 11.5753 17.1693 12.3553 17.2152 13.3715C17.2621 14.3878 16.574 14.8012 15.7893 14.8012C15.0046 14.8012 14.4177 14.4328 14.3708 13.4156C14.324 12.3994 14.923 11.5753 15.7087 11.5753ZM14.7749 15.7228C14.9221 15.7378 15.0158 15.8906 14.9587 16.0275C14.4758 17.1815 13.3358 17.9925 12.0055 17.9925C10.6752 17.9925 9.53616 17.1815 9.05241 16.0275C8.99522 15.8906 9.08897 15.7378 9.23616 15.7228C10.0987 15.6356 11.0315 15.5878 12.0055 15.5878C12.9796 15.5878 13.9115 15.6356 14.7749 15.7228Z"
                  fill="#5B5B5D"
                />
              </svg>
            </Link>

            <Link
              href="https://deployment.nextjs.boilerplate.hng.tech/"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <g clipPath="url(#clip0_10908_7028)">
                  <path
                    d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                    fill="#5B5B5D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10908_7028">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </section>
          <section className="">
            <div className="mb-2 break-words text-left font-normal text-[#5B5B5D]">
              <p className="m-0 leading-[16.94px]">
                Thank you for choosing Boilerplate. Need help?{" "}
                <Link
                  href="https://deployment.nextjs.boilerplate.hng.tech/"
                  className="font-semibold text-[#5B5B5D] no-underline visited:underline"
                >
                  Contact our customer support
                </Link>
                {/* <div className="justify-cenetr min-w-[300px] max-w-[500px]"> */}
                <div className="my-[30px] border border-t border-dashed border-[#5B5B5D20]"></div>
                {/* </div> */}
              </p>
            </div>
            <div className="text sm mb-3 w-[100%] break-words text-left font-normal text-[#5B5B5D]">
              <p className="m-0">
                You are receiving this email because you signed up at{" "}
                <Link
                  href="https://deployment.nextjs.boilerplate.hng.tech/"
                  className="text-[#5B5B5D] no-underline visited:underline"
                >
                  Boilerplate.com
                </Link>
                . Want to change how you receive these emails?
              </p>
            </div>
            <div className="break-words text-left text-sm font-normal text-[#5B5B5D]">
              <p className="m-0 leading-[25px]">
                You can{" "}
                <Link
                  href="https://deployment.nextjs.boilerplate.hng.tech/"
                  className="font-semibold text-[#5B5B5D] no-underline visited:underline"
                >
                  update your preferences
                </Link>{" "}
                or{" "}
                <Link
                  href="https://deployment.nextjs.boilerplate.hng.tech/"
                  className="break-words font-semibold text-[#5B5B5D] no-underline decoration-current visited:underline"
                >
                  unsubscribe from this list.
                </Link>
              </p>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default EmailFooter;
