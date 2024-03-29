import org.junit.Test;
import org.junit.Ignore;

import static org.assertj.core.api.Assertions.assertThat;

public class SqueakyCleanTest {


    //@Ignore
    @Test
    public void empty() {
        assertThat(SqueakyClean.clean("")).isEmpty();
    }

    //@Ignore
    @Test
    public void single_letter() {
        assertThat(SqueakyClean.clean("A")).isEqualTo("A");
    }

    //@Ignore
    @Test
    public void string() {
        assertThat(SqueakyClean.clean("àḃç")).isEqualTo("àḃç");
    }

    //@Ignore
    @Test
    public void spaces() {
        assertThat(SqueakyClean.clean("my   Id")).isEqualTo("my___Id");
    }

    //@Ignore
    @Test
    public void leading_and_trailing_spaces() {
        assertThat(SqueakyClean.clean(" myId ")).isEqualTo("_myId_");
    }

    //@Ignore
    @Test
    public void ctrl() {
        assertThat(SqueakyClean.clean("my\0\r\u007FId")).isEqualTo("myCTRLCTRLCTRLId");
    }

    //@Ignore
    @Test
    public void string_with_no_letters() {
        assertThat(SqueakyClean.clean("\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00")).isEmpty();
    }

    //@Ignore
    @Test
    public void keep_only_letters() {
        assertThat(SqueakyClean.clean("a1\uD83D\uDE002\uD83D\uDE003\uD83D\uDE00b")).isEqualTo("ab");
    }

    //@Ignore
    @Test
    public void kebab_to_camel_case() {
        assertThat(SqueakyClean.clean("à-ḃç")).isEqualTo("àḂç");
    }

    //@Ignore
    @Test
    public void kebab_to_camel_case_no_letter() {
        assertThat(SqueakyClean.clean("a-1C")).isEqualTo("aC");
    }

    //@Ignore
    @Test
    public void omit_lower_case_greek_letters() {
        assertThat(SqueakyClean.clean("MyΟβιεγτFinder")).isEqualTo("MyΟFinder");
    }

    //@Ignore
    @Test
    public void combine_conversions() {
        assertThat(SqueakyClean.clean("9 -abcĐ\uD83D\uDE00ω\0")).isEqualTo("_AbcĐCTRL");
    }
}
