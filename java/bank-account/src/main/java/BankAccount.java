public class BankAccount {
    private boolean open = false;
    private int balance = 0;

    public BankAccount(){
    }

    public void open(){
        this.open = true;
    }

    public void close(){
        this.open = false;
    }


    public int getBalance() throws BankAccountActionInvalidException{
        if (!open) {
            throw new BankAccountActionInvalidException("Account closed");
        }
        return this.balance;
    }

    public synchronized void deposit(int amount) throws BankAccountActionInvalidException{
        if (!open) {
            throw new BankAccountActionInvalidException("Account closed");
        } else if (amount < 0) {
            throw new BankAccountActionInvalidException("Cannot deposit or withdraw negative amount");
        }
        this.balance += amount;
    }

    public synchronized void withdraw(int amount) throws BankAccountActionInvalidException{
        if (!open) {
            throw new BankAccountActionInvalidException("Account closed");
        } else if (this.balance == 0) {
            throw new BankAccountActionInvalidException("Cannot withdraw money from an empty account");
        } else if (amount < 0) {
            throw new BankAccountActionInvalidException("Cannot deposit or withdraw negative amount");
        } else if (amount > this.balance) {
            throw new BankAccountActionInvalidException("Cannot withdraw more money than is currently in the account");
        } else {
            this.balance -= amount;
        }
    }
}