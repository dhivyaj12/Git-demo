package Runner;



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="C:\\Users\\veera\\Downloads\\argos-bdd\\BDDFramework\\src\\test\\java\\Feature\\Login.feature",
        glue={"StepDefinition"},
        format ={"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
        dryRun =false,
        monochrome = false,
        strict = false


)

public class TestRunner {

}
