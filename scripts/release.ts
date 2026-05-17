/* eslint-disable no-console */
import { execSync } from 'node:child_process';

function run(command: string): void {
    execSync(command, { stdio: 'inherit' });
}

try {
    const user = execSync('npm whoami', { encoding: 'utf8' }).trim();
    console.log(`Publishing as ${user}…`);
} catch {
    console.error('\nNot logged in to npm. Run:\n\n  npm login\n');
    process.exit(1);
}

const otpArg = process.argv.find(arg => arg.startsWith('--otp='));
const otp = otpArg?.slice('--otp='.length) ?? process.env.NPM_OTP;
const otpFlag = otp ? ` --otp=${otp}` : '';

run(`npm publish --access public${otpFlag}`);
